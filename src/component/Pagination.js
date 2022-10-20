import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import '../App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            users: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id) {
        debugger
        axios({
            url: `https://63382e00132b46ee0beb98e6.mockapi.io/api/users/${id}`,
            method: "DELETE",

        })
            .then(data => {
                this.setState({ users: data.data });
                window.location.reload();
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    fetchData() {
        axios
            .get(`https://63382e00132b46ee0beb98e6.mockapi.io/api/users`)
            .then(user => {
                const data = user.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = (

                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {slice.map((user) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td >{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td >
                                            {/* <button type='button' className='btn btn-success' onClick={() => this.props.handleEdit(user)}> Edit</button> */}
                                            <Link className='btn btn-success'
                                                to={{
                                                    pathname: `/users/${user.id}`,
                                                    state: { edit: true, userId: user.id }
                                                }}
                                            >
                                                Edit
                                            </Link>

                                            <button type='button' className='btn btn-danger m-1' onClick={() => this.handleDelete(user.id)}> Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                        )
                        }
                    </table>

                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick(e) {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.fetchData()
        });

    };

    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <div>
                <Link to="/" className='btn btn-primary'>Add new user</Link>

                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>

        )
    }
}
