const rootUrl = "http://localhost:3002";

describe("Buy giftcard for value", function() {
  it("It visits gift card landing page", function() {
    const email = "andra.zeberga@gmail.com";

    cy.visit(`${rootUrl}/davanu-karte`);

    cy.contains("Iegādāties").click();

    cy.contains("conifer").click();

    cy.contains("Uz priekšu").click();

    cy.wait(2000);

    cy.contains("Vērtība").click();

    cy.get('input[name="value"]')
      .focus()
      .clear()
      .type("5");

    cy.contains("add").click();

    cy.contains("Uz priekšu").click();

    cy.get('textarea[name="note"]')
      .focus()
      .type("For my beloved mommy");

    cy.contains("Uz priekšu").click();

    cy.get('input[name="email"]')
      .focus()
      .type(email);

    cy.contains("Uz priekšu").click();

    cy.wait(2000);

    cy.get(".__PrivateStripeElement > iframe").then($element => {
      const $body = $element.contents().find("body");

      cy.wrap($body.find('[name="cardnumber"]'))
        .focus()
        .type("4242424242424242");

      cy.wrap($body.find('[name="exp-date"]'))
        .focus()
        .type("1222");

      cy.wrap($body.find('[name="cvc"]'))
        .focus()
        .type("123");

      cy.contains("Maksāt").click();

      cy.wait(3000);

      cy.get("[id='gift_card_sent_to_email']").should("contain.text", email);
    });
  });
});
