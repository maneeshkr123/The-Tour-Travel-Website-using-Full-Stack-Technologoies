import { Link } from 'react-router-dom'
import './Contact.css'
import React, { Component } from 'react'
import axios from 'axios';






class Contact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDest = this.onChangeDest.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            budget: '',
            destination: ''
        }
    }

    clients = JSON.parse(localStorage.getItem("clients"));


    onChangeName(e) {
        this.setState(
            { name: e.target.value }
        )
    }
    onChangeEmail(e) {
        this.setState(
            { email: e.target.value }
        )
    }
    onChangeDest(e) {
        this.setState(
            { destination: e.target.value }
        )
    }
    onChangeBudget(e) {
        this.setState(
            { budget: e.target.value }
        )
    }
    onChangePhone(e) {
        this.setState(
            { phone: e.target.value }
        )
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.clients == null)
            this.clients = []
        this.clients.push(this.state)

        localStorage.setItem('clients', JSON.stringify(this.clients))

        this.setState({
            name: '',
            email: '',
            phone: '',
            budget: '',
            destination: ''
        })

    }






    render() {
        return (
            <div class="form">
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" class="form-control" name="fullname" value={this.state.name} onChange={this.onChangeName} placeholder="Full Name" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" onChange={this.onChangeEmail}
                            placeholder="Enter email" value={this.state.email} required />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Mobile Number</label>
                        <input type="text" value={this.state.phone} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" name="mobile" onChange={this.onChangePhone} placeholder="Mobile Number" required />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Your Destination</label>
                        <input type="text" class="form-control" name="destination" value={this.state.destination} onChange={this.onChangeDest} placeholder="Your Destination" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Your Budget</label>
                        <input type="text" onChange={this.onChangeBudget} value={this.state.budget} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" name="budget" placeholder="Your Budget" required />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                        <label class="form-check-label" for="exampleCheck1"><small>You're accepting <Link to="/terms"> Terms & Conditions </Link>  </small></label>
                    </div><br />
                    <button type="submit" class="btn btn-warning" name='btn' >Submit Your Details</button>
                </form>
            </div>
        )
    }
}


export default Contact