<script>
  import AuthHeaderComp from '../components/AuthHeaderComp.svelte'
  import AuthLoginComp from '../components/AuthLoginComp.svelte'
  import {
    // Styles,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from 'sveltestrap';

  let isModalOpen = false;
  const modalToggle = () => (isModalOpen = !isModalOpen);
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</svelte:head>

<AuthHeaderComp />
<main>
  <AuthLoginComp />

<Button color="danger" on:click={modalToggle} >모달</Button>

<div>
  <Modal class="modal-dialog modal-dialog-centered" aria-labelledby="staticBackdropLabel" aria-hidden="true" isOpen={isModalOpen} backdrop={true} {modalToggle}>
    <ModalHeader {modalToggle}>로그아웃</ModalHeader>
    <ModalBody>
      로그아웃 하시겠습니까?
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={modalToggle}>확인</Button>
      <Button color="secondary" on:click={modalToggle}>취소</Button>
    </ModalFooter>
  </Modal>
</div>
</main>