import React, { useState } from "react";
import "./index.css"

const PhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const getNumber = () => {
        const countryCode = document.getElementById('countryCode').value;
        const digit1 = document.getElementById('digit1').value;
        const digit2 = document.getElementById('digit2').value;
        const digit3 = document.getElementById('digit3').value;
        const digit4 = document.getElementById('digit4').value;
        const digit5 = document.getElementById('digit5').value;
        const digit6 = document.getElementById('digit6').value;
        const digit7 = document.getElementById('digit7').value;
        const digit8 = document.getElementById('digit8').value;
        const digit9 = document.getElementById('digit9').value;
        const digit10 = document.getElementById('digit10').value;
    
        if (!countryCode || !digit1 || !digit2 || !digit3 || !digit4 || !digit5 || 
            !digit6 || !digit7 || !digit8 || !digit9 || !digit10) {
            alert('Пожалуйста, заполните все поля номера телефона')
        }
        
        const phoneNumber = `+${countryCode} (${digit1}${digit2}${digit3}) ${digit4}${digit5}-${digit6}${digit7}-${digit8}${digit9}${digit10}`;
        setPhoneNumber(phoneNumber)
    }


    return (<>
    <h1>Введите номер телефона</h1>
    
    <form id="phoneForm">
        <div className="phone-input">
            <select id="countryCode" required>
                <option value="">+</option>
                <option value="7">+7 (Россия)</option>
                <option value="375">+375 (Беларусь)</option>
                <option value="380">+380 (Украина)</option>
                <option value="77">+77 (Казахстан)</option>
                <option value="1">+1 (США/Канада)</option>
            </select>
            
            <span className="separator"></span>
            
            <select id="digit1" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit2" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit3" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <span className="separator">-</span>
            
            <select id="digit4" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit5" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <span className="separator">-</span>
            
            <select id="digit6" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit7" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <span className="separator">-</span>
            
            <select id="digit8" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit9" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            
            <select id="digit10" required>
                <option value="">-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
        </div>
        
        <button type="button" onClick={getNumber}>Показать номер</button>
    </form>
    
    <div id="result" className="result" >
        <h3>Введенный номер телефона:</h3>
        <p id="phoneNumberDisplay">{phoneNumber}</p>
    </div>

      </>)
}

export default PhoneNumber