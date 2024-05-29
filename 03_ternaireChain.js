
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
    return a>b ? ">" 
           : a<b ? "<"
           : "="  
}

console.log(ternaryChain(3,5));
console.log(ternaryChain(2,2));
console.log(ternaryChain(4,2));

module.exports = ternaryChain;