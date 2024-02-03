import React, { useEffect, useState } from 'react';
import Input from '../../../components/UI/Input';
import Modal from '../../../components/UI/Modal';
import { Container, Row, Col } from 'react-bootstrap';


const AddCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        handleCategoryImage,
        categoryList
    } = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
        >
            <Row>
                <Col>
                    <Input
                        value={categoryName}
                        placeholder={`Nom Categorie`}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="form-control-sm"
                    />
                </Col>
                <Col>
                    <select className="form-control form-control-sm"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option>
                            choisir la catégorie
                        </option>
                        {
                            categoryList.map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />
                </Col>
            </Row>
        </Modal>
    )
}


export default AddCategoryModal;