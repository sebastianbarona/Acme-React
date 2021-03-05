import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <form action="/Agregar_compras" >
                <button type="submit" className="btn btn-primary">Sig in</button>
            </form>

            </form>
        );
    }
}