<script>
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

<!-- image backdrop blur -->
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-70 py-6 sm:py-12">
  <img src="/img/vecteezy_light-leak-blur-transparent-png_21193746_392.png" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>다양한 이용권 목록</p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                <!-- <code class="text-sm font-bold text-gray-900">주거</code> -->
                주거 회원
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                상가 회원
                <!-- <code class="text-sm font-bold text-gray-900">@apply</code> -->
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">통합 회원</p>
            </li>
          </ul>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <p class="text-gray-900">이용권 안내</p>
          <p>
            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">모든 이용권은 부가가치세가 별도 부과 &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</svelte:head>

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