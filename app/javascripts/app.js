// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import voting_artifacts from '../../build/contracts/CastYourVote.json'

var Voting = contract(voting_artifacts);

var candidateList = ["User1"];

window.voteForCandidate = function(candidates) {
	let candidate = $('#candidate').val().toString();
	console.log(candidate);
	Voting.deployed().then(function(votes) {
	for(let i=0;i<candidateList.length;i++)
		{
		   if(candidateList[i]==candidate)
		   {
				votes.VoteFor(candidate, {from:web3.eth.accounts[0]}).then(function() {
				return votes.totalVotesReceived.call(candidate).then(function(res){
				console.log(res.toString() + 'i value' + i);
				$("#candidate-"+i).html(res.toString());
					});
				});
		
		
			}
		}
	});
	}
	
	
	


window.addCandidate = function(candidate) {
	
	var table= document.getElementById('myTable');
	var row= table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML=$('#newCandidate').val();
	cell2.setAttribute('id','candidate-'+candidateList.length);
	candidateList.push($('#newCandidate').val());
	Voting.deployed().then(function(votes) {
		votes.addCandidates($('#newCandidate').val(),{from: web3.eth.accounts[0]});
		});
		
		console.log('add candidate ' + candidateList);
	
	
}



window.onload = function() {
	
	window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	Voting.setProvider(web3.currentProvider);
	console.log('reload');
	Voting.deployed().then(function(votes) {
		for(var i=0;i<candidateList.length;i++)
		{
			votes.resetVotes({from:web3.eth.accounts[0]});
		
		} 
		
		
	});
	
}

