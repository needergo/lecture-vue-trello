<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a href="" class="modal-default-button" 
<<<<<<< HEAD
          @click.prevent="close">&times;</a>
=======
          @click.prevent="SET_IS_ADD_BOARD(false)">&times;</a>
>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" 
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button class="btn" :class="{'btn-success': valid}" type="submit" 
        form="add-board-form" :disabled="!valid">
        Create Board</button>
    </div>
  </Modal>
</template>

<script>
<<<<<<< HEAD
<<<<<<< Updated upstream
import Modal from './Modal.vue'
=======
import { mapMutations } from "vuex";
import Modal from "./Modal.vue";

>>>>>>> Stashed changes
=======
import {mapMutations} from 'vuex'
import Modal from './Modal.vue'

>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
export default {
  components: {
    Modal
  },
  data() {
    return {
<<<<<<< HEAD
      input: "",
      valid: false
    };
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0;
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
<<<<<<< Updated upstream
    close() {
      this.$emit('close')
    },
    addBoard() {
      this.$emit('close')
      this.$emit('submit', this.input)
=======
    ...mapMutations(["SET_IS_ADD_BOARD"]),
    addBoard() {
      this.SET_IS_ADD_BOARD(false);
      this.$emit("submit", this.input);
>>>>>>> Stashed changes
    }
  }
};
</script>

<style>
=======
      input: '',
      valid: false
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    addBoard() {
      this.SET_IS_ADD_BOARD(false)
      this.$emit('submit', this.input)
    }
  }
}
</script>

<style>

>>>>>>> f590f4bdf3b32bc7ad320e0cfa5ad51be74273c4
</style>
