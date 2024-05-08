import requests
from bs4 import BeautifulSoup
import pandas as pd


html_text = requests.get('https://publicapis.io/').text

soup = BeautifulSoup(html_text, 'lxml')

featured = soup.find('div', class_='api-lists')

apis = featured.find_all('a', class_='api-card featured-card')

for i in apis:
    link = i.get('href')


print(link)



   