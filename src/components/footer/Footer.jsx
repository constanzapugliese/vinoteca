import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";


function Footer() {
    return (
        <footer className="row mt-5">
            <section className="col-12 text-center">
                <a href="https://www.instagram.com/vinoteca/" rel="noreferrer" target="_blank">
                    <FaInstagram className="instagram me-4"/>
                </a>
                <a href="https://es-la.facebook.com/VinotecaSA/?rf=224166334292310" rel="noreferrer" target="_blank">
                    <FaFacebookF />
                </a>
            </section>
            <nav className="col-12 my-4">
                <div className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center"><NavLink to="/" className="nav-link">Inicio</NavLink></li>
                        <li className="nav-item text-center"><NavLink to="/us" className="nav-link">Nosotrxs</NavLink></li>
                        <li className="nav-item text-center"><NavLink to="/products" className="nav-link">Productos</NavLink></li>
                        <li className="nav-item text-center"><NavLink to="/policies" className="nav-link">Políticas</NavLink></li>
                        <li className="nav-item text-center"><NavLink to="/contact" className="nav-link">Contacto</NavLink></li>
                    </ul>
                </div>
            </nav>
            <section className="col-12 text-center">
                <div className="mb-2">
                    <FaWhatsapp className="me-2" />
                    <h5 className="d-inline-flex"><a href="https://wa.me/5491155715380" rel="noreferrer" target="_blank">+54 9 11 4980 5322</a></h5>
                </div>
                <div className="mb-2">
                    <BsEnvelope className="me-2" />
                    <h5 className="d-inline-flex"><a href="mailto:vinoteca@gmail.com" rel="noreferrer" target="_blank">vinoteca@gmail.com</a></h5>
                </div>
                <div>
                    <BiMap className="me-2" />
                    <h5 className="d-inline-flex"><a href="https://goo.gl/maps/NHUhzaatQ6Nc1j7d7" rel="noreferrer" target="_blank">Hurlingham (GBA)</a></h5>
                </div>
            </section>
            <section className="col-12 mt-4 text-center">
                <FaMoneyBillWave className="pay mx-2" />
                <FaCcMastercard className="pay mx-2" />
                <FaCcVisa className="pay mx-2" />
                <FaCcAmex className="pay mx-2" />
                <FaCcDinersClub className="pay mx-2" />
                <img src="https://firebasestorage.googleapis.com/v0/b/vinoteca-2170e.appspot.com/o/bank-transfer.png?alt=media&token=77a6de99-9b58-4ccc-ae7d-95bcd47a67ed"alt="transferencia bancaria" width="30" height="30" className="mx-2" />
                <FaPaypal className="pay mx-2" />
                <img src="https://firebasestorage.googleapis.com/v0/b/vinoteca-2170e.appspot.com/o/mercado-pago.png?alt=media&token=0a7ab912-aba0-4787-942b-bca4f238a517" alt="Mercado Pago" width="30" height="30" className="mx-2" />
            </section>
            <section className="col-12 mt-2 text-center">
                <p>Beber con moderación. Prohibida su venta a menores de 18 años. No compartir contenido con menores de 18 años.</p>
            </section>
            <section className="col-12 text-center">
                <p>Defensa de lxs consumidorxs. Para reclamos <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" rel="noreferrer" target="_blank">ingresá acá</a></p>
            </section>
            <address className="col-12 text-center">
                <p>Todos los derechos reservados <a href="https://github.com/ConstanzaPugliese" rel="noreferrer" target="_blank">Constanza Pugliese</a>©2021</p>
            </address>
        </footer>
    )
}

export default Footer;
