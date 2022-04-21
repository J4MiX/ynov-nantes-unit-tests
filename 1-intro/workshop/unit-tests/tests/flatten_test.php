<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function test_something()
    {
        $this->assertEquals(1337, 1337);
    }

    public function test_flatten_empty_array()
    {
        $this->assertEquals(flatten([]), []);
    }

    public function test_flatten_array_with_one_element()
    {
        $this->assertEquals(flatten([1]), [1]);
    }

    public function test_flatten_array_with_two_elements()
    {
        $this->assertEquals(flatten([1, 2]), [1, 2]);
    }

    public function test_flatten_array_two_dimensions()
    {
        $this->assertEquals(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
    }

    public function test_flatten_array_three_dimensions()
    {
        $this->assertEquals(flatten([1, 2, [3, 4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);
    }
}