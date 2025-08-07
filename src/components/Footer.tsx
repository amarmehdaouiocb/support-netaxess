import React from 'react';
import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/image.png" 
                alt="Netaxess" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour toutes vos solutions informatiques. 
              Support technique professionnel et réactif.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@netaxess.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires de support</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Lundi - Vendredi: 8h00 - 18h00</div>
              <div>Samedi: 9h00 - 12h00</div>
              <div>Dimanche: Fermé</div>
              <div className="mt-3 text-xs text-gray-500">
                Support d'urgence disponible 24h/7j pour les clients premium
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Netaxess. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;