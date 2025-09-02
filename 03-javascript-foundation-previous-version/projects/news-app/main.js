let articleIndex = 0;
let newsData = [];
let isLoading = false;

// Sample news data for demo (fallback if API fails)
const sampleNews = [
    {
        title: "Revolutionary AI Technology Transforms Global Communication",
        description: "In a groundbreaking development that promises to reshape how we communicate across language barriers, researchers have unveiled a new artificial intelligence system capable of real-time translation with unprecedented accuracy.",
        author: "Sarah Kim",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Climate Change Summit Reaches Historic Agreement",
        description: "World leaders have reached a landmark agreement on climate action, setting ambitious targets for carbon neutrality and renewable energy adoption across all participating nations.",
        author: "Michael Chen",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Space Exploration Milestone: New Mars Colony Plans Unveiled",
        description: "International space agencies have announced detailed plans for the first permanent human settlement on Mars, with construction scheduled to begin within the next decade.",
        author: "Dr. Elena Rodriguez",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Breakthrough in Quantum Computing Achieves New Milestone",
        description: "Scientists have successfully demonstrated quantum supremacy in a new domain, solving complex problems that would take classical computers thousands of years to complete.",
        author: "Prof. James Wilson",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Medical Innovation: Gene Therapy Shows Promise for Rare Diseases",
        description: "A new gene therapy treatment has shown remarkable success in clinical trials, offering hope for patients with previously untreatable genetic conditions.",
        author: "Dr. Aisha Patel",
        url: "#",
        urlToImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
];

function truncateString(str, maxLength) {
    if (!str || str.length <= maxLength) {
        return str || "No content available";
    }
    return str.slice(0, maxLength - 3) + '...';
}

async function fetchNews() {
    try {
        
        const response = await fetch("http://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=Your api key");//paste yout api key

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            
            newsData = data.articles
                .filter(article => article.title && article.description)
                .map(({ author, description, title, url, urlToImage }) => ({
                    urlToImage: urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    title,
                    description,
                    author: author || "Unknown Author",
                    url: url || "#"
                }));
        } else {
            throw new Error('No articles found');
        }
    } catch (error) {
        console.log('API error:', error);
        newsData = [...sampleNews];
    }
}

function showLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('active');
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('active');
}

function updateArticleDisplay() {
    if (newsData.length === 0) {
        console.error('No news data available');
        return;
    }

    if (articleIndex >= newsData.length) {
        articleIndex = 0;
    }

    const article = newsData[articleIndex];

    
    const newsStory = document.getElementById('newsStory');
    newsStory.classList.add('transitioning');

    setTimeout(() => {
        
        document.getElementById("newsimage").src = article.urlToImage;
        document.getElementById("newstitle").textContent = truncateString(article.title, 100);
        document.getElementById("newsdescription").textContent = truncateString(article.description, 430);
        document.getElementById("newsauthor").textContent = truncateString(`Author: ${article.author}`,30);
        document.getElementById("newslink").href = article.url;

        
        newsStory.classList.remove('transitioning');
    }, 150);
}

async function changeArticle() {
    if (isLoading) return;

    isLoading = true;
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = true;

    showLoadingOverlay();

    
    setTimeout(() => {
        articleIndex++;
        updateArticleDisplay();
        hideLoadingOverlay();

        nextButton.disabled = false;
        isLoading = false;
    }, 500);
}


async function initializeApp() {
    await fetchNews();
    updateArticleDisplay();
}


setTimeout(() => {
    initializeApp();
}, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const newsImage = document.getElementById('newsimage');
    newsImage.addEventListener('error', function () {
        this.src = 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        changeArticle();
    }
});

