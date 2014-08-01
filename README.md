## angular-qrcode
angular-qrcode is an angular library that completely automates qr code generation in the browser. it also does qr code generation in an angular manner by binding with the passed in data and auto-updating with any change. 

this library uses a `<canvas>` to draw the qr code, and since the `<canvas>` element has seen about a 90% adoption rate, there shouldn't be any compatability issues.

### install
there are two usable files in this repo. `lib/qr-code.js` is an unminified version and should be used in development, and `build/qr-code.min.js` is minified and is suitable for production. to get started just throw your choice into a `<script>` tag:

```html
<script type="application/javascript" src="/path/to/qr-code.min.js">
```

and lastly, **be sure** to include it somewhere in your module definition:

```javascript
angular.module('myApp', ['qrcode']);
```

### usage
using angular-qrcode couldn't be more simple. simply create a tag like this:

```html
<qrcode size="200" data="i am a lovely qr-code"></qrcode>
```
    
and if you want auto-updating qr codes be sure to put your scope member in template delimiters:

```html
<qrcode size="{{ qr_code_size }}" data="{{ qr_code_data }}"></qrcode>
```
    

### api
there are a few more customization attributes that you can put on your qr code. here they are:

- `size=""` - size of the qr code in pixels (width and height are the same). this attribute is **required** for all qr code elements
- `data=""` - the data to be encoded into the qr code. need i further explain?
- `correct-level="medium"` - this attribute specifies the amount of correction level for the qr code. this wikipedia article can explain it further ([qr code error correction](http://en.wikipedia.org/wiki/QR_code#Error_correction)). the 4 possible settings are as follows:
    - `low` - 7% error correction
    - `medium` - 15% error correction (default)
    - `quartile` - 25% error correction
    - `high` - %30 error correction
- `background="#ffffff"` - the background color of the qr code. this defaults to white
- `foreground="#000000"` - the foreground color of the qr code. this defaults to black

### license
angular-qrcode is licensed under MIT. do with it what you will.

##### The MIT License (MIT)

Copyright &copy; 2014 Nick Comer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
