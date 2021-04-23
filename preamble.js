window.MathJax = {
    tex: {
        tags: 'ams',
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            vect: ["\\vec{\\bf{#1}}", 1],
            uvect: ["\\hat{\\bf{#1}}", 1],
            abs: ["\\left|#1\\right|", 1]
        }
    }
}