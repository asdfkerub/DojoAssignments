from flask import Flask, render_template , request, flash , session, redirect
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
mysql = MySQLConnector(app,'email_validation')
app.secret_key = 'kerub'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/process', methods=['POST'])
def process():
    if not EMAIL_REGEX.match(request.form['email']):
        flash(u'Invalid Email Address', 'error')
        return redirect('/')
    else:
        flash(u'The email {} is valid. Thank You'.format(request.form['email']) , 'success')
        query = "INSERT INTO users(email,created_at,updated_at) VALUES (:new_email,NOW(),NOW())"
        data = {
            'new_email' : request.form['email']
        }
        mysql.query_db(query,data)
        return redirect('/success')
@app.route('/success')
def success():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('success.html' , all_users = users)
@app.route('/delete/<user_id>')
def delete(user_id):
    query = "DELETE FROM users WHERE id = :delete_id"
    data = {
        'delete_id' : user_id
    }
    email = mysql.query_db('SELECT email FROM users WHERE id = :delete_id',data)
    the_email = email[0]["email"]
    flash(u'Successfully deleted {}'.format(the_email),'success')
    mysql.query_db(query,data)
    return redirect('/success')
app.run(debug=True)
