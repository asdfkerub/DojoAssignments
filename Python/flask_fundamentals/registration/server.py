from flask import Flask,render_template,request,session,redirect,flash
import re
app = Flask(__name__)
app.secret_key = 'kerub'
NO_NUM_REGEX = re.compile(r'^[^0-9]+$') # no number
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') # must be a valid email
PASS_LOWER_REGEX = re.compile(r'(?=.*[a-z])') # atleast one lowercase
PASS_UPPER_REGEX = re.compile(r'(?=.*[A-Z])') # atleast one uppercase
PASS_NUM_REGEX = re.compile(r'(?=.*[0-9])') # atleast one number
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register',methods=['POST'])
def register():
    if len(request.form['f_name']) < 1:
        flash(u'Please Add First Name','error')
    elif not NO_NUM_REGEX.match(request.form['f_name']):
        flash(u'Invalid First Name','error')
    else:
        flash(u'Good First Name','success')
    if len(request.form['l_name']) < 1:
        flash(u'Please Add Last Name','error')
    elif not NO_NUM_REGEX.match(request.form['l_name']):
        flash(u'Invalid Last Name','error')
    else:
        flash(u'Good Last Name','success')
    if len(request.form['email']) < 1:
        flash(u'Please Add Email','error')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash(u'Invalid Email','error')
    else:
        flash(u'Good Email','success')
    if len(request.form['password']) < 8:
        flash(u'Password too short','error')
    elif not PASS_LOWER_REGEX.match(request.form['password']):
        flash(u'Password Must Contain 1 Lower Case','error')
    elif not PASS_UPPER_REGEX.match(request.form['password']):
        flash(u'Password Must Contain 1 Upper Case','error')
    elif not PASS_NUM_REGEX.match(request.form['password']):
        flash(u'Password Must Contain 1 Number','error')
    if len(request.form['cpassword']) < 8:
        flash(u'Confirm Password Too Short','error')
    elif request.form['password'] != request.form['cpassword']:
        flash(u'Password does not match','error')
    else:
        flash(u'Password confirmed','success')
    return redirect('/')

app.run(debug=True)
