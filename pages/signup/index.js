import React, { useState } from 'react'
import Modal from 'react-modal'
import router from 'next/router';
import Layout from '../../components/layout';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const Login = () => {
    const [open, setOpen] = useState(true)
  
    const closeModal = () => {
        setOpen(false);
        router.push("/");
    }
    return (
        <Layout>

            <Modal
                style = {customStyles}
                isOpen = {open}
                onRequestClose={closeModal}
                contentLabel="Post modal"
                >
                Sign-up (TODO)
                <button onClick={closeModal}> Close </button>
            </Modal>
        </Layout>
    )
}

export default Login