import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
 
# Function to scrape data from a single webpage
def scrape_page(url):
    # Send a GET request to the webpage
    response = requests.get(url)
    # Parse the HTML content of the webpage
    soup = BeautifulSoup(response.text, 'html.parser')
   
    # Extract data from desired HTML tags (div, span, etc.)
    # Adjust these selectors according to your website's structure
    data = []
    data.extend(soup.find_all('div'))
    data.extend(soup.find_all('span'))
    data.extend(soup.find_all('title'))
    data.extend(soup.find_all('h1'))
    data.extend(soup.find_all('h2'))
    data.extend(soup.find_all('h3'))
    data.extend(soup.find_all('h4'))
    data.extend(soup.find_all('h5'))
    data.extend(soup.find_all('h6'))
    data.extend(soup.find_all('p'))
    data.extend(soup.find_all('pre'))
    data.extend(soup.find_all('ul'))
    data.extend(soup.find_all('ol'))
    data.extend(soup.find_all('li'))
 
    # Process the extracted data as needed
    # For example, you can extract text content from each element
    extracted_data = [tag.get_text() for tag in data]
   
    return extracted_data
 
# Function to recursively scrape all pages starting from a given URL
def scrape_website(start_url):
    visited_urls = set()
    urls_to_visit = [start_url]
    scraped_data = []
 
    while urls_to_visit:
        current_url = urls_to_visit.pop(0)
 
        # Skip already visited URLs to avoid crawling them again
        if current_url in visited_urls:
            continue
 
        # Scrape data from the current page
        page_data = scrape_page(current_url)
        scraped_data.extend(page_data)
 
        # Mark the current URL as visited
        visited_urls.add(current_url)
 
        # Find links on the current page and add them to the list of URLs to visit
        response = requests.get(current_url)
        soup = BeautifulSoup(response.text, 'html.parser')
        for link in soup.find_all('a', href=True):
            absolute_url = urljoin(current_url, link['href'])
            if absolute_url.startswith('https://jupyter.org/'):
                urls_to_visit.append(absolute_url)
 
    return scraped_data
 
# Start scraping from the main URL of your website
main_url = 'https://jupyter.org/'
scraped_data = scrape_website(main_url)
 
# Save scraped data to a text file
with open('scraped_data.txt', 'w', encoding='utf-8') as file:
    for data_point in scraped_data:
        file.write(data_point + '\n')
 
print("Scraped data saved to 'scraped_data.txt' file.")