from flask import Flask, request,session,render_template,redirect
app = Flask(__name__)
app.secrey_key = 'kerub'
@app.route('/users/<usernames>/<second>')
def show_user_profile(usernames,second):
    return render_template('index.html',usernames=usernames,second=second)
app.run(debug=True)
