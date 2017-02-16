from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'the_wall')

@app.route('/')
def index():
    return render_template('index.html')
# @app.route('/register', methods=["POST"])
# def register():
#     if len(request.form['first_name'] < 2):
#         flash(u'Invalid First Name','error')
#     return redirect('/')
@app.route('/login',methods=['POST'])
def login():

    if request.form['email'] == 'asdf@asdf.com' and request.form['password'] == 'Asdf123':
        return redirect('/wall')
    else:
        return redirect('/')
@app.route('/wall')
def wall():
    m_query = "SELECT messages.message,messages.id FROM messages LEFT JOIN users ON users.id = messages.users_id WHERE messages.users_id = users.id"
    q_messages = mysql.query_db(m_query)
    # message_idq = "SELECT id FROM messages"
    # the_ids = mysql.query_db(message_idq)
    # for ids in the_ids:
    # c_query = "SELECT comments.comment FROM comments LEFT JOIN messages ON messages.id = comments.messages_id WHERE comments.messages_id =" + str(ids['id'])
    c_query = "SELECT comments.comment,comments.messages_id,comments.created_at,users.first_name,users.last_name FROM comments LEFT JOIN messages ON messages.id = comments.messages_id LEFT JOIN users ON comments.users_id = users.id WHERE comments.messages_id = messages.id"
    q_comments = mysql.query_db(c_query)
    return render_template('wall.html', messages = q_messages , comments = q_comments)
app.run(debug=True)
