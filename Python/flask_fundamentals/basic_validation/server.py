from flask import Flask,render_template,session,request,redirect, flash
app = Flask(__name__)
app.secret_key = 'asdf'
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/process',methods=['POST'])
def proc():
    if len(request.form['name']) < 1:
        flash('Error You DUMBFCK')
    else:
        flash('Goood Shieeet {}'.format(request.form['name']))

    return redirect('/')

app.run(debug=True)
