from flask import Flask , render_template , request , redirect
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'friendsdb')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html' , all_friends=friends)

@app.route('/friends/<friend_id>')
def show(friend_id):
    # Write query to select specific user by id. At every point where
    # we want to insert data, we write ":" and variable name.
    query = "SELECT * FROM friends WHERE id = :specific_id"
    # Then define a dictionary with key that matches :variable_name in query.
    data = {'specific_id': friend_id}
    # Run query with inserted data.
    friends = mysql.query_db(query, data)
    # Friends should be a list with a single object,
    # so we pass the value at [0] to our template under alias one_friend.
    return render_template('single.html', one_friend=friends[0])

@app.route('/friends',methods=['POST'])
def newfriend():
    query = "INSERT INTO friends (first_name,last_name,occupation,created_at,updated_at) VALUES (:new_first_name,:new_last_name,:new_occupation,NOW(),NOW())"
    data = {
        'new_first_name' : request.form['first_name'],
        'new_last_name' : request.form['last_name'],
        'new_occupation' : request.form['occupation']
    }
    # print request.form['first_name']
    # print request.form['last_name']
    # print request.form['occupation']
    mysql.query_db(query,data)
    return redirect('/')

@app.route('/update')
def update():
    query = "SELECT id FROM friends"
    ids = mysql.query_db(query)
    return render_template('update.html', the_ids = ids)

@app.route('/change/<friend_id>',methods=['POST'])
def update_friend(friend_id):
    friend_id = request.form['chosen_id']
    query = "UPDATE friends SET first_name = :new_first_name , last_name = :new_last_name , occupation = :new_occupation WHERE id = :id"
    data = {
        'new_first_name' : request.form['first_name'],
        'new_last_name' : request.form['last_name'],
        'new_occupatioin' : request.form['occupation'],
        'id' : friend_id # requeset.form['chosen_id']
    }
    mysql.query_db(query,data)
    return redirect('/')

@app.route('/remove/<friend_id>',methods=['POST'])
def remove(friend_id):
  query = "DELETE FROM friends WHERE id = :id"
  data = {
    'id' : friend_id
  }
  mysql.query_db(query,data)
  return redirect('/')

app.run(debug=True)
