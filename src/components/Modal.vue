<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
<<<<<<< HEAD

=======
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
<<<<<<< HEAD
export default {};
=======
export default {
}
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
<<<<<<< HEAD
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

=======
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
<<<<<<< HEAD

=======
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
<<<<<<< HEAD
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

=======
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
<<<<<<< HEAD

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

=======
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
  text-decoration: none;
  color: #999;
}
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
<<<<<<< HEAD

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
=======
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
