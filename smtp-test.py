import os
import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

msg = MIMEMultipart('alternative')

msg['Subject'] = "Hello from Mandrill Python SMTP"
msg['From'] = "Jordan Blakey <jordan@pulsem.me>"
msg['To'] = "jordan@pulsem.me"

text = "Mandrill speaks plaintext"
part1 = MIMEText(text, 'plain')

html = "<em>Mandrill speaks <strong>HTML</strong></em>"
part2 = MIMEText(html, 'html')

username = 'pulseM'
password = 'EgVbEGmQBNnL49KQhthh6w'

msg.attach(part1)
msg.attach(part2)

s = smtplib.SMTP('smtp.mandrillapp.com', 587)

s.login(username, password)
s.sendmail(msg['From'], msg['To'], msg.as_string())

s.quit()
