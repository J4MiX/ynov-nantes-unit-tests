# Php temperature tracker

TempTracker is a class that allow us to record temperatures and to get info from it

We record temperatures in Fahrenheit, so they'll all be in the range 0..110.

# Php flatten

Just an adaptation of the flatten python function for demo purpose.
The flatten function should work this way :
flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4]

## To run

```bash
# php container
docker-compose up -d

# install phpunit
docker-compose exec test-temp-tracker composer install

# flatten tests
docker-compose exec test-temp-tracker ./vendor/phpunit/phpunit/phpunit tests/flatten_test.php
# tempTracker test
docker-compose exec test-temp-tracker ./vendor/phpunit/phpunit/phpunit tests/TempTrackerTest.php
```
