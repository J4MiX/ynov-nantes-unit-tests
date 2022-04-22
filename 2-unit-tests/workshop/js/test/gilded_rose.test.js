const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
    it("should foo", function () {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
    });

    it("should degrade quality of item twice as fast, after sellIn date passed", function () {
        const gildedRose = new Shop([new Item("foo", 0, 8)]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(6);
    });

    it("Quality of item is never negative", function () {
        const gildedRose = new Shop([new Item("foo", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(0);
    });

    it("Quality of item is never more than 50", function () {
        const gildedRose = new Shop([new Item("foo", 5, 55)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(48);
    });

    describe("Aged Brie", function () {
        it("increases in Quality the older it gets", function () {
            const gildedRose = new Shop([new Item("Aged Brie", 5, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(4);
            expect(items[0].quality).toBe(1);
        });
    });

    describe("Sulfuras", function () {
        it("never has to be sold or decreases in Quality", function () {
            const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(0);
            expect(items[0].quality).toBe(10);
        });
    });

    describe("Backstage passes", function () {
        it("increases in Quality as its SellIn value approaches", function () {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(14);
            expect(items[0].quality).toBe(11);
        });

        it("increases in Quality by 2 when there are 10 days or less", function () {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(9);
            expect(items[0].quality).toBe(4);
        });

        it("increases in Quality by 3 when there are 5 days or less", function () {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 7)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(4);
            expect(items[0].quality).toBe(10);
        });

        it("drops to 0 Quality after the concert", function () {
            const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(-1);
            expect(items[0].quality).toBe(0);
        });
    });

    describe("Conjured Item", function () {
        it("degrades in Quality twice as fast as normal items", function () {
            const gildedRose = new Shop([new Item("Conjured Item", 3, 6)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(2);
            expect(items[0].quality).toBe(4);
        });

        it("degrades in Quality twice as fast as normal items", function () {
            const gildedRose = new Shop([new Item("Conjured Item", 0, 6)]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).toBe(-1);
            expect(items[0].quality).toBe(2);
        });
    });
});