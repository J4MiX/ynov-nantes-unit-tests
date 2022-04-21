<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_something() {
        $this->assertEquals(42, 42);
    }

    public function test_insert_negative_temp() {
        $this->expectException(TypeError::class);
        $this->expectExceptionMessage('parameter should be a positive int');

        $temp_tracker = new TempTracker();
        $temp_tracker->insert(-1);
    }

    public function test_insert_temp_out_of_range() {
        $this->expectException(ValueError::class);
        $this->expectExceptionMessage('parameter should be within [0..110]');

        $temp_tracker = new TempTracker();
        $temp_tracker->insert(111);
    }

    public function test_insert_temp_not_int() {
        $this->expectException(TypeError::class);
        $this->expectExceptionMessage('parameter should be an int');

        $temp_tracker = new TempTracker();
        $temp_tracker->insert('1');
    }
}