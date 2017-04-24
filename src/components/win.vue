<template>
    <div class="container">
	<div class="panel panel-primary">
	    <div class="panel-heading">
		團體賽 勝部
	    </div>
	    <div class="panel-body" >
		<table class="table table-hover " v-for="score in scores[9]">
		    <tbody>
		    <tr>
			<td class="active">{{score.playerA}}</td><!--success-->
			<td class="active">{{score.scoreA}}</td>
		    </tr>
		    <tr>
			<td class="active">{{score.playerB}}</td>
			<td class="active">{{score.scoreB}}</td>
		    </tr>
		    <tr>
			<td></td>
			<td></td>
		    </tr>
		    </tbody>
		</table>
	    </div>
	</div>

    </div>
</template>

<script>
export default {
  name: 'manone',
  props: ['scores'],
}
</script>

<style>

</style>
