var giftCard = require("../index");

describe("A program that implements a gift card", () => {

	it("Can deduct a balance from a gift card", () => {
		expect(giftCard.deduct("-1.0"))
			.toBe("Invalid Transaction");
		expect(giftCard.deduct("0.0"))
			.toBe("Invalid Transaction"); 	 
		expect(giftCard.deduct("18.00"))
			.toBe("Remaining Balance: 7"); 
		expect(giftCard.deduct("10.00"))
			.toBe("Amount Due: 3");	
		expect(giftCard.deduct("18.00"))
			.toBe("Amount Due: 18");	
	});

}); 