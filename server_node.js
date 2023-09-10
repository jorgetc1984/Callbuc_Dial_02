const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/registrar') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                // Procesa los datos recibidos y verifica la autenticación aquí
                // Si la autenticación es exitosa, puedes redirigir a otra página
                const { usuario, password, campaña } = JSON.parse(body);
                const extensionesValidas = ["101", "102", "103"];
                const claveValida = "123456";
                const campañaValida = "paneles";

                if (
                    extensionesValidas.includes(usuario) &&
                    password === claveValida &&
                    campaña === campañaValida
                ) {
                    // Si la autenticación es exitosa, puedes redirigir a la página principal
                    const indexPath = path.join(__dirname, 'CallBucDial1.html'); // Ruta al archivo index.html
                    fs.readFile(indexPath, (err, data) => {
                        if (err) {
                            res.statusCode = 404;
                            res.end('Not Found');
                        } else {
                            res.setHeader('Content-Type', 'CallBucDial1.html'); // Establece el tipo de contenido como HTML
                            res.end(data);
                        }
                    });
                } else {
                    res.statusCode = 401;
                    res.end('Unauthorized');
                }
            } catch (error) {
                console.error("Error:", error);
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        });
    } else {
        // Serve your HTML file for other requests
        const indexPath = path.join(__dirname, 'CallBucDial1.html'); // Ruta al archivo index.html
        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.setHeader('Content-Type', 'CallBucDial1.html'); // Establece el tipo de contenido como HTML
                res.end(data);
            }
        });
    }
});

const port = 3000; // Set your desired port number
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
