<button class="btn">Hello daisyui</button>
<!-- Open the modal using ID.showModal() method -->

<!-- <button class="btn" onclick="my_modal_5.showModal()">모달!</button> -->
<button class="btn btn-primary">Button</button>
<div class="dropdown">
  <label tabindex="0" class="btn m-1">Click</label>
  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<!-- Open the modal using ID.showModal() method -->
<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">open modal</button>

<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>