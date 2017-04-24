<template>
    <div class="container">
	<div class="panel panel-primary">
	    <div class="panel-heading">
	公告	
	    </div>
	    <div class="panel-body" >
		<table class="table table-hover">
		    <tbody>
		    <tr>
			<td class="active">目前無公告</td><!--success-->
		    </tr>
		    </tbody>
		</table>
	    </div>
	</div>

    </div>
</template>

<script>
export default {
  name: 'home',
  props: ['scores'],
}
</script>

<style>

</style>
