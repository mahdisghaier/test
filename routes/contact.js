const express = require('express');
const router = express.Router();
const controller = require('../controllers/ContactController');









/**
 * @swagger
 * /contact/ajouter:
 *   post:
 *     summary: Ajouter un contact
 *     description: Ajoute un nouveau contact à la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               tel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact ajouté avec succès
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact ajouté avec succès."
 *               contact:
 *                 nom: "John Doe"
 *                 prenom:  "d"
 *                 tel: "12345678"
 *                 _id: "65c8172b59a0181f65224090"
 *                 createdAt: "2024-02-11T00:39:07.910Z"
 *                 updatedAt: "2024-02-11T00:39:07.910Z"
 *                 __v: 0
 *       400:
 *         description: Les données requises ne sont pas fournies
 *         content:
 *           application/json:
 *             example:
 *               message: "Le nom et le téléphone sont requis."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */


/**
 * @swagger
 * /contact/{id}/modifier:
 *   put:
 *     summary: Modifier un contact
 *     description: Modifie les informations d'un contact dans la base de données.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du contact à modifier
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               tel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact modifié avec succès
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact modifié avec succès."
 *               contact:
 *                 nom: "John Doe"
 *                 prenom: "Jane"
 *                 tel: "98765432"
 *                 _id: "65c8172b59a0181f65224090"
 *                 createdAt: "2024-02-11T00:39:07.910Z"
 *                 updatedAt: "2024-02-13T10:00:00.000Z"
 *                 __v: 1
 *       400:
 *         description: Les données requises ne sont pas fournies
 *         content:
 *           application/json:
 *             example:
 *               message: "Le nom et le téléphone sont requis."
 *       404:
 *         description: Contact non trouvé
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact introuvable."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */
/**
 * @swagger
 * /contact/{id}/modifier:
 *   put:
 *     summary: Modifier un contact
 *     description: Modifie les informations d'un contact dans la base de données.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du contact à modifier
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               tel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact modifié avec succès
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact modifié avec succès."
 *               contact:
 *                 nom: "John Doe"
 *                 prenom: "Jane"
 *                 tel: "98765432"
 *                 _id: "65c8172b59a0181f65224090"
 *                 createdAt: "2024-02-11T00:39:07.910Z"
 *                 updatedAt: "2024-02-13T10:00:00.000Z"
 *                 __v: 1
 *       400:
 *         description: Les données requises ne sont pas fournies
 *         content:
 *           application/json:
 *             example:
 *               message: "Le nom et le téléphone sont requis."
 *       404:
 *         description: Contact non trouvé
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact introuvable."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */

/**
 * @swagger
 * /contact/{id}/supprimer:
 *   delete:
 *     summary: Supprimer un contact
 *     description: Supprime un contact de la base de données en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du contact à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact supprimé avec succès
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact supprimé avec succès."
 *       404:
 *         description: Contact non trouvé
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact introuvable."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */

/**
 * @swagger
 * /contact/lister:
 *   get:
 *     summary: Lister les contacts
 *     description: Récupère la liste de tous les contacts dans la base de données.
 *     responses:
 *       200:
 *         description: Liste des contacts récupérée avec succès
 *         content:
 *           application/json:
 *             example:
 *               contacts:
 *                 - nom: "John Doe"
 *                   prenom: "Jane"
 *                   tel: "98765432"
 *                   _id: "65c8172b59a0181f65224090"
 *                   createdAt: "2024-02-11T00:39:07.910Z"
 *                   updatedAt: "2024-02-13T10:00:00.000Z"
 *                   __v: 1
 *                 - nom: "Alice"
 *                   prenom: "Bob"
 *                   tel: "12345678"
 *                   _id: "65c8172b59a0181f65224091"
 *                   createdAt: "2024-02-12T08:20:00.000Z"
 *                   updatedAt: "2024-02-13T10:00:00.000Z"
 *                   __v: 1
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */

/**
 * @swagger
 * /contact/rechercher:
 *   get:
 *     summary: Rechercher un contact
 *     description: Recherche un contact dans la base de données en fonction de paramètres spécifiés.
 *     parameters:
 *       - in: query
 *         name: nom
 *         required: false
 *         description: Nom du contact à rechercher
 *         schema:
 *           type: string
 *       - in: query
 *         name: prenom
 *         required: false
 *         description: Prénom du contact à rechercher
 *         schema:
 *           type: string
 *       - in: query
 *         name: tel
 *         required: false
 *         description: Numéro de téléphone du contact à rechercher
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact(s) trouvé(s) avec succès
 *         content:
 *           application/json:
 *             example:
 *               contacts:
 *                 - nom: "John Doe"
 *                   prenom: "Jane"
 *                   tel: "98765432"
 *                   _id: "65c8172b59a0181f65224090"
 *                   createdAt: "2024-02-11T00:39:07.910Z"
 *                   updatedAt: "2024-02-13T10:00:00.000Z"
 *                   __v: 1
 *       404:
 *         description: Aucun contact trouvé
 *         content:
 *           application/json:
 *             example:
 *               message: "Aucun contact trouvé."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */

router.get('/contact/lister',controller.listerContact);

router.post('/contact/ajouter',controller.ajouterContact);
router.put('/contact/:id/modifier',controller.modifierContact);
router.delete('/contact/:id/supprimer',controller.supprimerContact);
router.get('/contact/rechercher',controller.chercherContact);



module.exports= router;
