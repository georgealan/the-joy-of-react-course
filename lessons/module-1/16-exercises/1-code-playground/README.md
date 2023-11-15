# Exercise Extract components: Building a CRM

Let's practice creating components! In the exercises below, you'll be given a chunk of JSX, and your mission is to refactor the code so that it uses a component.

Let's suppose we're building CRM? software.

We've written the markup to display the contact information for 3 contacts, but there's an awful lot of repetition involved. Let's create a new component, ContactCard, and use that component for each of the 3 contacts.

Acceptance Criteria:

* A brand-new ContactCard component should be created and used for each of the 3 contact cards
* Props should be created for any bits of information that vary from card to card.