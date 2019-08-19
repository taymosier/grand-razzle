import React, { Component } from 'react';
import { Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { HelpModalBody } from './HelpModalBody';
import { HelpNavigator } from './HelpNavigator';
import './help.css';


export class HelpModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      active: 0,
			language: this.props.language
    }
    this.toggle = this.toggle.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount(){
    this.setState({
      icon: "./info.png"
    })
  }

	componentDidUpdate(){
		if(this.state.language !== this.props.language){
			this.setState({
				language: this.props.language
			})
		}
	}

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }

  setActive(e){
    e.preventDefault();
    this.setState({
      active: e.target.value
    })
  }

  render(){
    const steps = [
			{
        "header": {
					"en": "Step #1: Check Dates",
					"es": "Paso # 1: Verificar fechas"
				},
				"body": {
					"en": "Fill out Check Availability form. Availability changes daily. We call resort to check availability of your desired location and date. We try our best to respond within 24 hours. We send a confirmation email that the dates and location are available along with the Booking Form.",
					"es": "Rellene el formulario Comprobar disponibilidad. La disponibilidad cambia diariamente. Llamamos al resort para verificar la disponibilidad de su ubicación y fecha deseadas. Hacemos todo lo posible para responder dentro de las 24 horas. Enviamos un correo electrónico de confirmación de que las fechas y la ubicación están disponibles junto con el Formulario de reserva."
				}
      },
			{
        "header": {
					"en": "Step #2: Book Dates",
					"es": "Paso # 2: Fechas de libros"
				},
				"body": {
					"en": "Fill out Booking Form or call 919-452-8777. We book reservation and send a confirmation number. If desired departure date is in 2.5 months or less make sure of flight availability before filling out Booking Form.",
					"es": "Complete el formulario de reserva o llame al 919-452-8777. Reservamos reserva y enviamos un número de confirmación. Si la fecha de salida deseada es en 2,5 meses o menos, asegúrese de la disponibilidad del vuelo antes de completar el Formulario de reserva."
				}
      },
			{
				"header": {
					"en": "Step #3: Pay",
					"es": "Paso # 3: Pagar"
				},
				"body": {
					"en": "Pay once there’s a confirmation number that’s verifiable with resort's central reservations. Full payment is then due. Payments - PayPal Invoice; bank transfer, debit or credit card.",
					"es": "Pague una vez que haya un número de confirmación que sea verificable con las reservas centrales del resort. El pago total es debido. Pagos: PayPal o cheque."
				},
			},
			{
				"header": {
					"en": "Step #4: Transportation",
					"es": "Paso # 4: Transporte"
				},
				"body": {
					"en": "Transportation and guest letter will be provided to you with free courtesy transportation to the resort where you will be treated as the guests of owners at the exclusive resort. ",
					"es": "Transportation and guest letter will be provided with free courtesy transportation to the complex where you will be treated as the guests of the owners in the exclusive complex."
				}
			}

  ]
    return(
      <div className={"help-toggle-container"}>
        <Button className={"help-toggle"} onClick={this.toggle}>
          {this.state.icon !== undefined ? <p>How It Works</p> : null }
        </Button>
        <Modal className="help" isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>
            {this.props.language === "en" ? "How It Works" : "Cómo funciona"}
          </ModalHeader>
          <HelpModalBody isOpen={this.state.modal} toggle={this.toggle} step={steps[this.state.active]} language={this.props.language}/>
          <ModalFooter>
            <HelpNavigator steps={steps} setActive={this.setActive} active={this.state.active}/>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}
