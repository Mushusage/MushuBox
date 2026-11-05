<?php
/**
 * 无想盒 MushuBox 主题 functions.php（最简版）
 *
 * 做三件事：
 *   1. 声明主题支持
 *   2. 加载 WordPress 区块样式（让文章正文 content.rendered 有排版）
 *   3. 加载 Vue 打包产物（vue-src/dist/assets/index.js 与 index.css）
 */

if (!defined('ABSPATH')) {
    exit; // 禁止直接访问本文件
}

/** 主题基本支持 */
function mushubox_setup() {
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'mushubox_setup');

/** 加载前端资源 */
function mushubox_enqueue() {
    // 主题自身 style.css（WordPress 自动识别，这里显式入队以确保加载）
    wp_enqueue_style('mushubox-theme', get_stylesheet_uri(), [], '1.0');

    // WordPress 区块库样式：Vue 用 v-html 渲染的正文带有 wp-block-* 类名，
    // 不加载这两个样式，段落/列表/图片/引用就没有默认排版。
    // 只需按 handle 入队核心已注册的样式，不必写 src。
    wp_enqueue_style('wp-block-library');
    wp_enqueue_style('wp-block-library-theme');

    $assets_dir = get_theme_file_path('vue-src/dist/assets');
    $assets_uri = get_theme_file_uri('vue-src/dist/assets');

    if (file_exists($assets_dir . '/index.css')) {
        wp_enqueue_style('mushubox-vue', $assets_uri . '/index.css', [], '1.0');
    }

    if (file_exists($assets_dir . '/index.js')) {
        wp_enqueue_script('mushubox-vue', $assets_uri . '/index.js', [], '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'mushubox_enqueue');
