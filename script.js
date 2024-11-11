class Smoothie {
    constructor(size, base, ingredients) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
    }

    getTotalPrice() {
        const ingredientPrices = {
            'Banana': 0.5,
            'Strawberry': 0.7,
            'Spinach': 0.3,
            'Blueberry': 0.8
        };

        let basePrice = 3.0; // Starting price based on size
        basePrice += this.size === 'Medium' ? 1.0 : this.size === 'Large' ? 2.0 : 0;

        let ingredientTotal = this.ingredients.reduce((total, ingredient) => {
            return total + (ingredientPrices[ingredient] || 0);
        }, basePrice);

        return ingredientTotal.toFixed(2);
    }

    display() {
        return `
            <h2>Your Smoothie Order</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
            <p><strong>Total Price:</strong> $${this.getTotalPrice()}</p>
        `;
    }

    updateImage() {
        const img = document.getElementById('dynamicImage');
        if (this.ingredients.includes('Banana') && this.ingredients.includes('Strawberry')) {
            img.src = "images/banana_strawberry_smoothie.jpg";
        } else if (this.ingredients.includes('Spinach') && this.ingredients.includes('Blueberry')) {
            img.src = "images/spinach_blueberry_smoothie.jpg";
        } else {
            img.src = "images/smoothie.jpeg";
        }
    }
}

function orderSmoothie() {
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;

    const ingredients = [];
    ['banana', 'strawberry', 'spinach', 'blueberry'].forEach(id => {
        const ingredient = document.getElementById(id);
        if (ingredient.checked) ingredients.push(ingredient.value);
    });

    const smoothie = new Smoothie(size, base, ingredients);
    document.getElementById('orderSummary').innerHTML = smoothie.display();
    smoothie.updateImage();
}
