function navigateToCategory(category) {
    window.location.href = category.toLowerCase() + '.html';
  }
  
  function navigateToRandomCategory() {
    const categories = ['Lunch', 'Dinner', 'Sushi'];
  
    // Select a random category from the array
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    // Redirect to the random category page
    window.location.href = randomCategory.toLowerCase() + '.html';
    }