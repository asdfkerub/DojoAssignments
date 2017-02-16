from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'kerub'
mysql = MySQLConnector(app , 'full_friends')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
@app.route('/')
def index():
    query = "SELECT * FROM users"
    friends = mysql.query_db(query)
    return render_template('index.html' , friends_list = friends)
@app.route('/friends', methods=['POST'])
def friends():
    if not EMAIL_REGEX.match(request.form['email']):
        flash(u'Invalid email','error')
    else:
        query = "INSERT INTO users (first_name, last_name,email,created_at,updated_at) VALUES (:fname,:lname,:email,NOW(),NOW())"
        data = {
            'fname' : request.form['f_name'],
            'lname' : request.form['l_name'],
            'email' : request.form['email'],
        }
        mysql.query_db(query , data)
        print request.form['f_name']
        print request.form['l_name']
        flash(u'Added {} {} to the list'.format(request.form['f_name'],request.form['l_name']),'success')
    return redirect('/')
@app.route('/friends/<friend_id>/edit')
def edit(friend_id):
    query = "SELECT * FROM users WHERE id = :id"
    data = {
        'id' : friend_id
    }
    friend = mysql.query_db(query,data)
    return render_template('friends.html',friend_info = friend)
@app.route('/friends/<friend_id>' , methods=['POST'])
def edit2(friend_id):
    if not EMAIL_REGEX.match(request.form['e_email']):
        flash(u'Invalid Email','error')
    else:
        query = "UPDATE users SET first_name = :nf_name , last_name = :nl_name , email = :n_email , updated_at = NOW() WHERE id = :id"
        data = {
            'id' : friend_id,
            'nf_name' : request.form['e_f_name'],
            'nl_name' : request.form['e_l_name'],
            'n_email' : request.form['e_email']
        }
        mysql.query_db(query,data)
        flash(u'{} {} has been updated'.format(request.form['e_f_name'],request.form['e_l_name']),'success')
    return redirect('/')
@app.route('/friends/<friends_id>/delete')
def delete(friends_id):
    query = "DELETE FROM users where id = :id"
    data = {
        'id' : friends_id
    }
    mysql.query_db(query,data)
    flash(u'Deleted a friend','success')
    return redirect('/')
app.run(debug=True)
