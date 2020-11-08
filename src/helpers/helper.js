  

export default class Helper {

    static colorCategory (category) {
        if (category === "Alimentation (frais, sec, spiritueux)") {
            return '#F0CC05'
        } 
        if (category === "Loisirs (créatif, livres, jeunesse") {
            return '#E546EA'
        } 
        if (category === "Maison (meuble, déco, électroménager)") {
            return '#4698EA'
        } 
        if (category === "Accessoires (bijouterie, maroquinerie, cosmétique)") {
            return '#36EEA8'
        } 
        if (category === "Vêtements (homme, femme, enfant)") {
            return '#29DF10'
        } 
         if (category === "Services") {
            return '#F54C27'
        } 
        if (category === "Spécialisé jeux de société") {
            return '#ea3558'
        } 
        else {
            return 'blue'
        }
    }
    
}