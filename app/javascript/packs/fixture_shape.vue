<template>
    <div class="form-group">
        <label for="weld-technique">Fixture Shape:</label>
        <select v-model="selected" class="form-control" id="weld-technique">
            <option v-for="fixture_shape in fixture_shapes" v-bind:value="fixture_shape.value">
                {{ fixture_shape.title }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                fixture_shapes: [
                    {value: 'plate', title: 'Plate'},
                    {value: 't_plate', title: 'T-Plate'},
                    {value: 'pipe', title: 'Pipe'},
                    {value: 't_pipe', title: 'T-Pipe'},
                    {value: 'lap_joint', title: 'Lap Joint'}
                ],
                selected: 'plate'
            }
        }
    }

</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
