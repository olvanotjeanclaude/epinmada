<?php
/**
 * @var \App\View\AppView $this
 * @var array $params
 * @var string $message
 */
if (!isset($params['escape']) || $params['escape'] !== false) {
    $message = h($message);
}
?>

<?php if ($message !== 'You are not authorized to access that location.'): ?>
<div class="alert alert-danger" onclick="this.classList.add('hidden');"><?= $message ?></div>
<?php endif; ?>
