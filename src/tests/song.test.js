/**
 * @file      song.test.js
 * @brief     This class is designed to test the behaviour of a song.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const Song = require('../Song/Song.js');
const TooShortSongException = require('../Song/TooShortSongException.js');


test('allGetters_NominalCase_Success', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, name, quantity, price);
    let total = 200;

    //when
    //we call the getters directly in assertion below

    //then
    expect(articleId).toEqual(cartItem.articleId);
    expect(articleId).toEqual(cartItem.articleId);
    expect(quantity).toEqual(cartItem.quantity);
    expect(price).toEqual(cartItem.price);
    expect(total).toEqual(cartItem.total);
})

test('constructor_InvalidArticleId_ThrowException', () => {
    //given
    let articleId = -1;//Invalid article id (smaller than 1)
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;

    //when
    expect(() => new CartItem(articleId, name, quantity, price)).toThrow(InvalidArticleIdException);

    //then
    //Exception is thrown
})

test('constructor_InvalidQuantity_ThrowException', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = -10;//Invalid article id (smaller than 1)
    let price = 20;

    //when
    expect(() => new CartItem(articleId, name, quantity, price)).toThrow(InvalidQuantityException);

    //then
    //Exception is thrown
})

test('constructor_InvalidPrice_ThrowException', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 9;//Invalid price (smaller than 10)

    //when
    expect(() => new CartItem(articleId, name, quantity, price)).toThrow(InvalidPriceException);

    //then
    //Exception is thrown
})

test('quantity_setQuantityNominalCase_Success', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, name, quantity, price);
    let expectedQuantity = 15;
    let expectedTotal = 300;

    //when
    cartItem.quantity = expectedQuantity;

    //then
    expect(expectedQuantity).toEqual(cartItem.quantity);
    expect(expectedTotal).toEqual(cartItem.total);
})

test('quantity_setQuantityInvalidValue_ThrowException', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, name, quantity, price);
    let invalidQuantityToSet = -1;//Invalid quantity (smaller than 1)

    //when
    expect(() => cartItem.quantity = invalidQuantityToSet).toThrow(InvalidQuantityException);

    //then
    //Exception is thrown
})

test('price_setPriceNominalCase_Success', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, name,quantity, price);
    let expectedPrice = 22;
    let expectedTotal = 220;

    //when
    cartItem.price = expectedPrice;

    //then
    expect(expectedPrice).toEqual(cartItem.price);
    expect(expectedTotal).toEqual(cartItem.total);
})

test('price_setPriceInvalidPrice_ThrowException', () => {
    //given
    let articleId = 1;
    let name = "Iphone 27";
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, name, quantity, price);
    let invalidPriceToSet = 9;//Invalid quantity (smaller than 10)

    //when
    expect(() => cartItem.price = invalidPriceToSet).toThrow(InvalidPriceException);

    //then
    //Exception is thrown
})
