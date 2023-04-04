from flask import Flask, render_template
import datetime
import pytz

app = Flask(__name__)

@app.route('/')
def hello_world():
    india_time = datetime.datetime.now(pytz.timezone('Asia/Kolkata'))
    ny_time = datetime.datetime.now(pytz.timezone('America/New_York'))
    tokyo_time = datetime.datetime.now(pytz.timezone('Asia/Tokyo'))
    india_time_formatted = india_time.strftime('%Y-%m-%d %H:%M:%S')
    ny_time_formatted = ny_time.strftime('%Y-%m-%d %H:%M:%S')
    tokyo_time_formatted = tokyo_time.strftime('%Y-%m-%d %H:%M:%S')
    return render_template('index.html', india_time=india_time_formatted, ny_time=ny_time_formatted, tokyo_time=tokyo_time_formatted)

if __name__ == '__main__':
    app.run()

