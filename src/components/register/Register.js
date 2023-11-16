
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    };

    return (
        <div className="container" >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <h2 className="card-header">Iniciar sesión</h2>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Introduce tu contraseña" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;
