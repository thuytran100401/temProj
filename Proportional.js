/* 
Part 2 - Proportional Mining Pool
---------------------------------
In a proportional (PROP) mining pool, the rewards are divided amongst all of the miners who participated in finding the block.  This design is safer for the operator, since they do not pay out rewards until a block proof is found.  However, this design is vulnerable to pool-hopping attacks.

Extend the PoolOperator class to make a new PropPoolOperator class.

Override the rewardMiner method to store the address of any miner who contributes a share.  Now the miner is not paid immediately, but will receive their reward eventually.

Override the payRewards method to post a transacting paying all miners who contributed a share to the last block.  The coinbase reward is 25 gold.  The operator will keep 5 gold, and divide up the remaining gold among the miners according to the amount of shares that they found.

(By posting a transaction, there is a risk that the block will be orphaned, and the operator will eat the cost of the shares it paid out.  We can avoid this problem by including the reward transaction only in our own block, and then redoing the transaction if our block is orphaned.  If you feel ambitious, you can try that approach.)
*/