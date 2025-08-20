import React, { useState } from 'react';
import { Send, AlertCircle, Printer, Monitor, Wifi, HardDrive, User, Mail, Phone, Building, FolderOpen, Home, MessageSquare, Bug } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  filiale: string;
  category: string;
  subject: string;
  description: string;
}

const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    filiale: '',
    category: '',
    subject: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { value: 'printing', label: 'Problème d\'impression', icon: Printer },
    { value: 'network', label: 'Problème réseau', icon: Wifi },
    { value: 'hardware', label: 'Problème matériel', icon: Monitor },
    { value: 'software', label: 'Problème logiciel', icon: HardDrive },
    { value: 'shared-folder', label: 'Accès dossier partage', icon: FolderOpen },
    { value: 'remote-work', label: 'Accès télétravail', icon: Home },
    { value: 'messaging', label: 'Messagerie', icon: MessageSquare },
    { value: 'system-bug', label: 'Bug système', icon: Bug },
    { value: 'other', label: 'Autre', icon: AlertCircle }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Remplacez cette URL par l'URL de votre backend PHP
      const response = await fetch('send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Une erreur est survenue lors de l\'envoi de votre demande.');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ticket créé avec succès</h3>
        <p className="text-gray-600 mb-6">
          Votre demande de support a été enregistrée. Nous vous contacterons dans les plus brefs délais.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setError(null);
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              filiale: '',
              category: '',
              subject: '',
              description: ''
            });
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Créer un nouveau ticket
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Centre de Support Technique
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez-vous un problème avec votre solution informatique ? 
              Notre équipe d'experts est là pour vous aider rapidement et efficacement.
            </p>
          <SupportForm />
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
        <h2 className="text-2xl font-bold text-white mb-2">Demande de Support Technique</h2>
        <p className="text-blue-100">
          Décrivez votre problème et notre équipe technique vous assistera rapidement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-1" />
              Prénom *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline w-4 h-4 mr-1" />
              Nom *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline w-4 h-4 mr-1" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="votre.email@entreprise.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline w-4 h-4 mr-1" />
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="01 23 45 67 89"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="inline w-4 h-4 mr-1" />
            Entreprise *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="inline w-4 h-4 mr-1" />
            Filiale
          </label>
          <input
            type="text"
            name="filiale"
            value={formData.filiale}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Nom de la filiale (optionnel)"
          />
        </div>

        {/* Catégorie du problème */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Catégorie du problème *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <label
                  key={category.value}
                  className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                    formData.category === category.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={formData.category === category.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <IconComponent className={`w-5 h-5 mr-3 ${
                    formData.category === category.value ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    formData.category === category.value ? 'text-blue-900' : 'text-gray-700'
                  }`}>
                    {category.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Sujet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sujet du problème *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Résumé bref du problème"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description détaillée *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Décrivez votre problème en détail : quand est-il survenu, quelles actions avez-vous effectuées, messages d'erreur éventuels..."
          />
        </div>

        {/* Bouton de soumission */}
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Envoyer la demande
              </>
            )}
          </button>
        </div>
      </form>
    </div>
      </div>
  </div>
  );
};

export default SupportForm;