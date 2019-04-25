import React, { Component } from 'react';

class ProductsList extends Component {
    render() {
        return (
            <div className = "container" style={{marginTop: 100}}>
                <table className="table table-striped table-inverse table-bordered">
                    <thead className="thead-inverse ">
                        <tr className="bg-dark text-white">
                            <th>STT</th>
                            <th>Hãng</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
};
export default ProductsList;