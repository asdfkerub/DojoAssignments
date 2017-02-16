from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = 'kerub'
mysql = MySQLConnector(app,'registration')

NO_NUM_REGEX = re.compile(r'^[^0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/register', methods=['POST'])
def register():
    if not NO_NUM_REGEX.match(request.form['f_name']) or len(request.form['f_name']) < 2:
        flash(u'Invalid First Name' , 'error')
        return redirect('/')
    else:
        flash(u'Valid First Name' , 'success')
    if not NO_NUM_REGEX.match(request.form['l_name']) or len(request.form['l_name']) < 2:
        flash(u'Invalid Last Name' , 'error')
        return redirect('/')
    else:
        flash(u'Valid Last Name' , 'success')
    if not EMAIL_REGEX.match(request.form['email']):
        flash(u'Invalid Email','error')
        return redirect('/')
    else:
        flash(u'Valid Email','success')
    if len(request.form['password']) < 8:
        flash(u'Password too short','error')
        return redirect('/')
    else:
        flash(u'Password Valid','success')
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
    if request.form['c_password'] != request.form['password']:
        flash(u'Passwords does not match','error')
        return redirect('/')
    else:
        query = "INSERT INTO users (first_name,last_name,email,pw_hash,created_at,updated_at) VALUES (:f_name,:l_name,:email,:pw_hash,NOW(),NOW())"
        data = {
            'f_name' : request.form['f_name'],
            'l_name' : request.form['l_name'],
            'email' : request.form['email'],
            'pw_hash' : pw_hash,
        }
        mysql.query_db(query,data)
        flash('Created user {} {}'.format(request.form['f_name'],request.form['l_name']),'success')

    return redirect('/')

@app.route('/login',methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    data = {
        'email' : email
    }
    user = mysql.query_db(query,data)
    if bcrypt.check_password_hash(user[0]['pw_hash'],password):
        session['user'] = user[0]['id']
        print session['user']
        return redirect('/account')
    else:
        flash(u'Invalid Account','error')
        return redirect('/')

@app.route('/account')
def account():
    query = "SELECT * FROM users WHERE id = :id"
    data = {
        'id' : session['user']
    }
    user = mysql.query_db(query,data)
    return render_template('account.html' , user_info = user)

app.run(debug=True)
