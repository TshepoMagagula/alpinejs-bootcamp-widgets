function Greet(){
    return {
        name: '',
        greeting: '',
        greet() {
            this.greeting = greet(this.name);
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('greet', Greet);
});


function greet(name) {
    return "Hello, " + name;
}